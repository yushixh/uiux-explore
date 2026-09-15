"use client";

import { useEffect, useRef } from "react";
import {
    BufferAttribute,
    BufferGeometry,
    Color,
    DoubleSide,
    GLSL3,
    Mesh,
    OrthographicCamera,
    RawShaderMaterial,
    Scene,
    Vector2,
    WebGLRenderer,
} from "three";

import { cn } from "@/lib/utils";

const VERTEX_SHADER = /* glsl */ `
in vec3 position;

void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision highp float;

uniform vec2 resolution;
uniform float time;
uniform float xScale;
uniform float yScale;
uniform float distortion;

out vec4 fragColor;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float d = length(p) * distortion;

  float rx = p.x * (1.0 + d);
  float gx = p.x;
  float bx = p.x * (1.0 - d);

  float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
  float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
  float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

  fragColor = vec4(r, g, b, 1.0);
}
`;

const POSITIONS = new Float32Array([
    -1, -1, 0, 1, -1, 0, -1, 1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0,
]);

interface SineWaveBackgroundProps {
    className?: string;
    xScale?: number;
    yScale?: number;
    distortion?: number;
    timeSpeed?: number;
    clearColor?: string;
}

class Stage {
    canvas: HTMLCanvasElement;
    scene: Scene;
    camera: OrthographicCamera;
    renderer: WebGLRenderer;
    clearColor: string;

    constructor(canvas: HTMLCanvasElement, clearColor: string) {
        this.canvas = canvas;
        this.clearColor = clearColor;
        this.scene = new Scene();
        this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, -1);
        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            antialias: false,
            depth: false,
            stencil: false,
            alpha: false,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(new Color(this.clearColor));
    }

    setClearColor(color: string) {
        this.clearColor = color;
        this.renderer.setClearColor(new Color(color));
    }

    setSize(width: number, height: number) {
        this.renderer.setSize(width, height);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}

class WaveMesh {
    mesh: Mesh;
    uniforms: {
        resolution: { value: Vector2 };
        time: { value: number };
        xScale: { value: number };
        yScale: { value: number };
        distortion: { value: number };
    };

    constructor(stage: Stage, canvas: HTMLCanvasElement) {
        const geometry = new BufferGeometry();
        geometry.setAttribute(
            "position",
            new BufferAttribute(POSITIONS, 3),
        );

        this.uniforms = {
            resolution: {
                value: new Vector2(canvas.width, canvas.height),
            },
            time: { value: 0 },
            xScale: { value: 1 },
            yScale: { value: 0.5 },
            distortion: { value: 0.05 },
        };

        const material = new RawShaderMaterial({
            glslVersion: GLSL3,
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            uniforms: this.uniforms,
            side: DoubleSide,
        });

        this.mesh = new Mesh(geometry, material);
        stage.scene.add(this.mesh);
    }

    updateResolution(canvas: HTMLCanvasElement) {
        this.uniforms.resolution.value.set(canvas.width, canvas.height);
    }

    tick(timeSpeed: number) {
        this.uniforms.time.value += timeSpeed;
    }

    setUniforms(
        xScale: number,
        yScale: number,
        distortion: number,
    ) {
        this.uniforms.xScale.value = xScale;
        this.uniforms.yScale.value = yScale;
        this.uniforms.distortion.value = distortion;
    }

    dispose() {
        this.mesh.geometry.dispose();
        (this.mesh.material as RawShaderMaterial).dispose();
    }
}

function SineWaveBackground({
    className,
    xScale = 1,
    yScale = 0.5,
    distortion = 0.05,
    timeSpeed = 0.01,
    clearColor = "#666666",
}: SineWaveBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const propsRef = useRef({
        xScale,
        yScale,
        distortion,
        timeSpeed,
        clearColor,
    });

    propsRef.current = {
        xScale,
        yScale,
        distortion,
        timeSpeed,
        clearColor,
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const canvas = document.createElement("canvas");
        canvas.className = "block h-full w-full";
        container.appendChild(canvas);

        const stage = new Stage(canvas, propsRef.current.clearColor);
        const waveMesh = new WaveMesh(stage, canvas);

        const resize = () => {
            const width = container.clientWidth || window.innerWidth;
            const height = container.clientHeight || window.innerHeight;

            stage.setSize(width, height);
            waveMesh.updateResolution(canvas);
        };

        resize();

        const handleWindowResize = () => {
            resize();
        };

        window.addEventListener("resize", handleWindowResize);

        let frameId = 0;

        const tick = () => {
            const {
                xScale: nextXScale,
                yScale: nextYScale,
                distortion: nextDistortion,
                timeSpeed: nextTimeSpeed,
                clearColor: nextClearColor,
            } = propsRef.current;

            waveMesh.setUniforms(nextXScale, nextYScale, nextDistortion);
            waveMesh.tick(nextTimeSpeed);
            stage.setClearColor(nextClearColor);
            stage.render();

            frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleWindowResize);
            waveMesh.dispose();
            stage.renderer.dispose();
            container.removeChild(canvas);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative h-full min-h-screen w-full overflow-hidden",
                className,
            )}
        />
    );
}

export { SineWaveBackground, type SineWaveBackgroundProps };
