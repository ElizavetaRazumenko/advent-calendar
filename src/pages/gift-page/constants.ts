import type { ComponentType } from "react";
import { DayFour } from "./components/day-four/DayFour";
import { DayOne } from "./components/day-one/DayOne";
import { DayThree } from "./components/day-three/DayThree";
import { DayTwo } from "./components/day-two/DayTwo";
import type { AdventDay } from "src/types/main";

export const GIFT_DAY_VIEWS: Partial<Record<number, ComponentType<{ day: AdventDay }>>> = {
  1: DayOne,
  2: DayTwo,
  3: DayThree,
  4: DayFour,
}