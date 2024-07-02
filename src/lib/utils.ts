

export type Picked = "rock" | "paper" | "scissors" | "";
export function whoWins(p1: Picked, p2: Picked) {
    if (p1 === "rock") {
        if (p2 === "rock") {
            return "draw"
        }
        if (p2 === "paper") {
            return "p2"
        }
        if (p2 === "scissors") {
            return "p1"
        }
    }
    if (p1 === "paper") {
        if (p2 === "rock") {
            return "p1"
        }
        if (p2 === "paper") {
            return "draw"
        }
        if (p2 === "scissors") {
            return "p2"
        }
    }
    if (p1 === "scissors") {
        if (p2 === "rock") {
            return "p2"
        }
        if (p2 === "paper") {
            return "p1"
        }
        if (p2 === "scissors") {
            return "draw"
        }
    }
    return ""
}