import { KavachStoryData } from "@/types/content";

export const kavachStoryData: KavachStoryData = {
  title: "Kavach — AI-Powered Voice Authentication Door Lock",
  tagline: "“What if AI could become the key?”",
  overview:
    "A 5-person team project and my first production-grade build. Kavach transformed voice authentication into a physical security mechanism, integrating deep learning, IoT hardware, microcontrollers, and motor actuators.",
  teamContext: "5-person engineering team project at NIT Jalandhar.",
  problem:
    "Keys and physical access tokens are routinely misplaced, forgotten, or duplicated without authorization. Traditional biometric solutions like fingerprint scanners require physical contact and dedicated scanner hardware.",
  concept:
    "Turn a person's voice into a dynamic, biometric cryptographic key: authenticate user identity and speech intent using AI, transmit authorized signals from a server to microcontrollers, and physically actuate the door mechanism.",
  architecture: {
    hardware: [
      "Raspberry Pi central local server",
      "Arduino microcontroller interface",
      "DC/Servo motor lock actuation system",
      "Physical door prototype frame",
      "Audio capture microphone array",
    ],
    software: [
      "Voice registration & sample collection interface",
      "AI/ML Voice Authentication & Feature Extraction Pipeline",
      "Local server communication protocol (Pi to Arduino)",
      "State-machine control software on Arduino",
      "Security validation and keyword verification service",
    ],
    flow: [
      "Voice Input (Speaker + Keyword)",
      "AI Feature Extraction & Authentication",
      "Raspberry Pi Server Validation",
      "Serial Signal to Arduino",
      "Motor Actuator Trigger",
      "Physical Door Unlock",
    ],
  },
  steps: [
    {
      id: "idle",
      title: "System Idle & Ready",
      phase: "Phase 0 · Standby",
      description: "The security system listens in low-power standby mode for valid audio signals.",
      technicalDetails: [
        "Microphone array actively monitors ambient audio levels",
        "Arduino maintains physical lock engagement in closed position",
      ],
    },
    {
      id: "assembly",
      title: "Hardware-Software Integration",
      phase: "Phase 1 · Assembly",
      description: "Connecting the physical components with the computing architecture.",
      technicalDetails: [
        "Wired serial interface between Raspberry Pi and Arduino",
        "Motor driver circuit coupled to physical mechanical deadbolt",
        "Local web server set up for voice enrollment",
      ],
    },
    {
      id: "authentication",
      title: "Voice Capture & AI Evaluation",
      phase: "Phase 2 · Processing",
      description: "The user speaks the passphrase; the AI model compares voice biometrics against registered profiles.",
      technicalDetails: [
        "Audio waveform sampled and pre-processed",
        "Feature vector extracted and scored against authorized user voiceprints",
      ],
    },
    {
      id: "physical-flow",
      title: "Signal Transmission to Hardware",
      phase: "Phase 3 · Execution",
      description: "Upon verification, authentication payload is passed to the Arduino to drive the motor.",
      technicalDetails: [
        "Server transmits signed authorization byte over serial bus",
        "Arduino verifies checksum and commands motor driver",
      ],
    },
    {
      id: "failure",
      title: "Real-World Failure Encountered",
      phase: "Phase 4 · Break",
      description:
        "Testing revealed that when an unauthorized person spoke the identical keyword, acoustic similarities and sensitivity flaws could lead to improper triggers.",
      technicalDetails: [
        "Keyword matching alone proved vulnerable without strict speaker voiceprint verification",
        "Motor stall current caused transient voltage drops affecting the Arduino reset pin",
      ],
      lesson: "Real-world physical environments expose edge cases that software simulations never reveal.",
    },
    {
      id: "debugging",
      title: "Root Cause Isolation & Debugging",
      phase: "Phase 5 · Debug",
      description:
        "Isolating power rails to prevent brownouts, and tightening biometric threshold boundaries alongside two-stage voice verification.",
      technicalDetails: [
        "Added decoupling capacitors and isolated motor power from microcontroller logic",
        "Refined speaker verification model to separate passphrase recognition from biometric authentication",
      ],
    },
    {
      id: "recovery",
      title: "System Hardening & Retesting",
      phase: "Phase 6 · Recovery",
      description: "Iterative testing across multiple team members, pitch variations, and environmental noise levels.",
      technicalDetails: [
        "Rigorous false-acceptance vs false-rejection threshold calibration",
        "Hardware circuit stress testing under repeated actuation cycles",
      ],
    },
    {
      id: "working",
      title: "Working Production Prototype",
      phase: "Phase 7 · Verified System",
      description:
        "The complete system accurately authenticates authorized team members, rejects unauthorized speakers, and smoothly actuates the physical lock.",
      technicalDetails: [
        "Reliable voice biometric unlock in under 2 seconds",
        "Stable physical prototype deployed on demonstration door assembly",
      ],
      lesson: "Building end-to-end means taking full responsibility for the entire chain from software to physics.",
    },
  ],
  failures: [
    "Security vulnerability: unauthorized speaker trigger with matching keyword prior to biometric threshold refinement",
    "Hardware power instability: motor draw causing microcontroller brownouts during torque spikes",
    "Acoustic noise interference during raw microphone input processing",
  ],
  recoveries: [
    "Separated keyword recognition from speaker biometric verification into a two-pass pipeline",
    "Isolated motor supply circuitry with dedicated power management",
    "Tuned ambient noise cancellation and threshold confidence scoring",
  ],
  keyLesson:
    "Building is not just writing code that works in isolation — it requires mastering integration, anticipating edge cases, handling physical uncertainties, and refusing to hide behind comfortable abstractions.",
};
