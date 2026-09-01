import { ProofClaim } from "@/types/content";

export const proofClaimsData: ProofClaim[] = [
  {
    id: "proof-education-nitj",
    claim:
      "Graduated with a Bachelor of Technology in Electrical Engineering from Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar.",
    sourceType: "official",
    sourceUrl: "https://www.nitj.ac.in",
    date: "2024",
    verificationStatus: "verified",
    notes: "Official institutional degree credentials.",
    relatedContent: ["/about", "/story"],
  },
  {
    id: "proof-kavach-repo",
    claim:
      "Kavach: Built an end-to-end voice authentication AI door lock system combining Raspberry Pi, Arduino microcontrollers, and motor actuators in a 5-person team.",
    sourceType: "github",
    sourceUrl: "https://github.com/rinkudiwakar",
    verificationStatus: "verified",
    notes: "Project architecture and hardware-software integration documented.",
    relatedContent: ["/work/kavach", "/story"],
  },
  {
    id: "proof-skillgap-repo",
    claim:
      "SkillGap AI: Engineered an NLP semantic embedding engine mapping academic curricula and user profiles against live industry skill requirements.",
    sourceType: "github",
    sourceUrl: "https://github.com/rinkudiwakar",
    verificationStatus: "verified",
    notes: "Taxonomy mapping and gap diagnostic engine codebase.",
    relatedContent: ["/work/skillgap-ai"],
  },
  {
    id: "proof-nanotrade-repo",
    claim:
      "NanoTrade: Developed an event-driven backtesting and quantitative simulation engine for mathematical trading strategies.",
    sourceType: "github",
    sourceUrl: "https://github.com/rinkudiwakar",
    verificationStatus: "verified",
    notes: "Deterministic backtesting architecture codebase.",
    relatedContent: ["/work/nanotrade"],
  },
  {
    id: "proof-pradrix-brand",
    claim:
      "Pradrix is an early-stage AI consulting and workflow automation venture founded to bridge business bottlenecks with purposeful technology.",
    sourceType: "official",
    sourceUrl: "https://pradrix.com",
    verificationStatus: "verified",
    notes: "Official company blueprint and 8-stage operational methodology.",
    relatedContent: ["/pradrix"],
  },
];
