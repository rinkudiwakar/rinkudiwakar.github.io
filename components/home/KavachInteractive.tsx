"use client";

import * as React from "react";
import {
  Mic,
  Cpu,
  Server,
  Zap,
  Lock,
  Unlock,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getKavachStory } from "@/lib/content";
import { KavachState } from "@/types/content";
import { cn } from "@/lib/utils/cn";

export function KavachInteractive() {
  const kavach = getKavachStory();
  const [currentStateIndex, setCurrentStateIndex] = React.useState(0);

  const steps = kavach.steps;
  const currentStep = steps[currentStateIndex] || steps[0];
  const currentStateId: KavachState = currentStep.id;

  const handleNext = React.useCallback(() => {
    setCurrentStateIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, [steps.length]);

  const handlePrev = React.useCallback(() => {
    setCurrentStateIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleReset = React.useCallback(() => {
    setCurrentStateIndex(0);
  }, []);

  // Keyboard navigation within interactive module
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Status flags
  const isFailure = currentStateId === "failure";
  const isDebugging = currentStateId === "debugging";
  const isRecovery = currentStateId === "recovery";
  const isWorking = currentStateId === "working";
  const isDoorUnlocked = isWorking;

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="w-full rounded-[var(--radius-xl)] bg-[var(--background-card)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] p-6 md:p-8 space-y-8 focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-hidden"
      aria-label="Kavach Interactive Build Simulation"
    >
      {/* Top Header & State Stepper */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                isFailure ? "warning" : isWorking ? "success" : "accent"
              }
            >
              {currentStep.phase}
            </Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              Step {currentStateIndex + 1} of {steps.length}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--foreground)] mt-1">
            {currentStep.title}
          </h3>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentStateIndex === 0}
            className="p-2 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            aria-label="Previous step"
            title="Previous step (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentStateIndex === steps.length - 1}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs font-medium transition-colors"
            aria-label="Next step"
            title="Next step (Right Arrow or Space)"
          >
            <span>Next Phase</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border)] cursor-pointer transition-colors"
            aria-label="Reset simulation to beginning"
            title="Reset simulation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Dots Rail */}
      <div
        className="grid grid-cols-8 gap-1.5 sm:gap-2"
        role="tablist"
        aria-label="Kavach story steps"
      >
        {steps.map((step, idx) => {
          const isActive = idx === currentStateIndex;
          const isPassed = idx < currentStateIndex;
          return (
            <button
              key={step.id}
              role="tab"
              aria-selected={isActive}
              aria-label={step.title}
              onClick={() => setCurrentStateIndex(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-200 cursor-pointer",
                isActive
                  ? step.id === "failure"
                    ? "bg-amber-500 ring-2 ring-amber-300"
                    : step.id === "working"
                    ? "bg-emerald-500 ring-2 ring-emerald-300"
                    : "bg-[var(--accent)] ring-2 ring-[var(--ring)]"
                  : isPassed
                  ? "bg-[var(--foreground-muted)]"
                  : "bg-[var(--border-strong)] hover:bg-[var(--foreground-subtle)]"
              )}
            />
          );
        })}
      </div>

      {/* Visual System Architecture Diagram */}
      <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--background-subtle)] border border-[var(--border)] space-y-6">
        <div className="flex items-center justify-between text-xs font-mono text-[var(--foreground-subtle)] uppercase tracking-wider">
          <span>Physical & Software Architecture Flow</span>
          <span>5-Person Engineering Build · NIT Jalandhar</span>
        </div>

        {/* Pipeline Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Node 1: Audio / Voice Input */}
          <div
            className={cn(
              "p-3 rounded-[var(--radius-md)] border text-xs space-y-1.5 transition-colors duration-200",
              currentStateIndex >= 2
                ? "bg-[var(--background-card)] border-[var(--accent)] text-[var(--foreground)] shadow-xs"
                : "bg-[var(--background)] border-[var(--border)] text-[var(--foreground-muted)] opacity-60"
            )}
          >
            <div className="flex items-center justify-between">
              <Mic className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                01 · Input
              </span>
            </div>
            <div className="font-semibold text-xs text-[var(--foreground)]">
              Voice Biometrics
            </div>
            <div className="text-[10px] text-[var(--foreground-muted)] font-mono">
              Passphrase + Voiceprint
            </div>
          </div>

          {/* Node 2: Raspberry Pi Central Server */}
          <div
            className={cn(
              "p-3 rounded-[var(--radius-md)] border text-xs space-y-1.5 transition-colors duration-200",
              currentStateIndex >= 2
                ? isFailure
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-400 text-amber-900 dark:text-amber-200"
                  : "bg-[var(--background-card)] border-[var(--accent)] text-[var(--foreground)] shadow-xs"
                : "bg-[var(--background)] border-[var(--border)] text-[var(--foreground-muted)] opacity-60"
            )}
          >
            <div className="flex items-center justify-between">
              <Server className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                02 · Compute
              </span>
            </div>
            <div className="font-semibold text-xs text-[var(--foreground)]">
              Raspberry Pi
            </div>
            <div className="text-[10px] text-[var(--foreground-muted)] font-mono">
              AI Auth & Web Service
            </div>
          </div>

          {/* Node 3: Arduino Microcontroller */}
          <div
            className={cn(
              "p-3 rounded-[var(--radius-md)] border text-xs space-y-1.5 transition-colors duration-200",
              currentStateIndex >= 3
                ? isFailure
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-400 text-amber-900 dark:text-amber-200"
                  : "bg-[var(--background-card)] border-[var(--accent)] text-[var(--foreground)] shadow-xs"
                : "bg-[var(--background)] border-[var(--border)] text-[var(--foreground-muted)] opacity-60"
            )}
          >
            <div className="flex items-center justify-between">
              <Cpu className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                03 · Serial Bus
              </span>
            </div>
            <div className="font-semibold text-xs text-[var(--foreground)]">
              Arduino Controller
            </div>
            <div className="text-[10px] text-[var(--foreground-muted)] font-mono">
              Signal & Logic Driver
            </div>
          </div>

          {/* Node 4: Motor Driver & Actuator */}
          <div
            className={cn(
              "p-3 rounded-[var(--radius-md)] border text-xs space-y-1.5 transition-colors duration-200",
              currentStateIndex >= 3
                ? isFailure
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-400 text-amber-900 dark:text-amber-200"
                  : "bg-[var(--background-card)] border-[var(--accent)] text-[var(--foreground)] shadow-xs"
                : "bg-[var(--background)] border-[var(--border)] text-[var(--foreground-muted)] opacity-60"
            )}
          >
            <div className="flex items-center justify-between">
              <Zap className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                04 · Power
              </span>
            </div>
            <div className="font-semibold text-xs text-[var(--foreground)]">
              Motor Driver
            </div>
            <div className="text-[10px] text-[var(--foreground-muted)] font-mono">
              High-Torque Actuator
            </div>
          </div>

          {/* Node 5: Physical Door Deadbolt */}
          <div
            className={cn(
              "p-3 rounded-[var(--radius-md)] border text-xs space-y-1.5 col-span-2 sm:col-span-1 transition-colors duration-200",
              isDoorUnlocked
                ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-xs"
                : isFailure
                ? "bg-amber-50 dark:bg-amber-950/20 border-amber-400 text-amber-900 dark:text-amber-200"
                : "bg-[var(--background)] border-[var(--border)] text-[var(--foreground-muted)] opacity-60"
            )}
          >
            <div className="flex items-center justify-between">
              {isDoorUnlocked ? (
                <Unlock className="w-4 h-4 text-[var(--success)]" />
              ) : (
                <Lock className="w-4 h-4 text-[var(--foreground-muted)]" />
              )}
              <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                05 · Physics
              </span>
            </div>
            <div className="font-semibold text-xs">
              {isDoorUnlocked ? "Lock: Disengaged" : "Lock: Secured"}
            </div>
            <div className="text-[10px] font-mono">
              Physical Door Frame
            </div>
          </div>
        </div>
      </div>

      {/* Step Narrative & Real-World Failures/Debug Context */}
      <div className="space-y-4">
        <p className="text-base md:text-lg text-[var(--foreground)] font-body leading-relaxed">
          {currentStep.description}
        </p>

        {/* Technical Details Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentStep.technicalDetails.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--foreground-muted)] font-mono"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        {/* Specialized Callout Box for Failure & Debug States */}
        {isFailure && (
          <div className="p-4 rounded-[var(--radius-md)] bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Documented Failure: Keyword Vulnerability & Brownout</span>
            </div>
            <p className="leading-relaxed font-body">
              Testing proved that keyword matching alone was insecure: an
              unauthorized person speaking the same keyword could trigger the door
              if acoustic thresholds were too broad. Additionally, the motor stall
              current caused voltage brownouts on the microcontroller logic bus.
            </p>
          </div>
        )}

        {isDebugging && (
          <div className="p-4 rounded-[var(--radius-md)] bg-blue-50 dark:bg-blue-950/20 border border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-blue-600" />
              <span>Root Cause Fix: Biometric Separation & Power Isolation</span>
            </div>
            <p className="leading-relaxed font-body">
              We decoupled passphrase recognition from speaker voiceprint verification
              into a two-pass pipeline, while adding dedicated decoupling capacitors
              and isolated power rails for the high-torque motor driver.
            </p>
          </div>
        )}

        {isRecovery && (
          <div className="p-4 rounded-[var(--radius-md)] bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>Retesting Under Environmental Stress</span>
            </div>
            <p className="leading-relaxed font-body">
              Repeated multi-speaker calibration under varying pitch, background
              noise levels, and load cycles to ensure false-acceptance dropped to zero.
            </p>
          </div>
        )}

        {isWorking && (
          <div className="p-4 rounded-[var(--radius-md)] bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Working Physical Prototype Verified</span>
            </div>
            <p className="leading-relaxed font-body">
              The finished system successfully authenticates authorized team members
              in under 2 seconds and actuates the physical deadbolt reliably.
            </p>
          </div>
        )}

        {/* Step-Specific Lesson Callout */}
        {currentStep.lesson && (
          <div className="pt-2 text-xs font-mono text-[var(--foreground-muted)] border-t border-[var(--border)] flex items-start gap-2">
            <span className="font-bold text-[var(--foreground)] shrink-0">
              Insight:
            </span>
            <span className="italic">“{currentStep.lesson}”</span>
          </div>
        )}
      </div>

      {/* Keyboard Shortcut Hint */}
      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[var(--foreground-subtle)] border-t border-[var(--border)]">
        <span>Use ← and → arrow keys to step through the build</span>
        <span>Kavach · 5-Person Team Build</span>
      </div>
    </div>
  );
}
