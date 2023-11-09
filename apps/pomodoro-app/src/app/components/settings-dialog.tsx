import { Font, useFontContext } from "@/app/font-provider"
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog"
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "@radix-ui/react-radio-group/dist"
import { useProxy } from "valtio/utils"
import {
  longBreakState,
  pomodoroState,
  shortBreakState,
} from "@/app/timer-store"
import { Color, useColorContext } from "@/app/color-provider"

export function SettingsDialog() {
  const { font, setFont } = useFontContext()
  const { color, setColor } = useColorContext()
  const pomodoroStore = useProxy(pomodoroState)
  const shortBreakStore = useProxy(shortBreakState)
  const longBreakStore = useProxy(longBreakState)

  return (
    <DialogPortal>
      <DialogOverlay className="fixed inset-0 bg-black/50" />
      <DialogContent className="fixed inset-0 mx-6 my-12 flex flex-col rounded-2xl bg-white p-6 lg:px-10 lg:py-8">
        <DialogTitle className="text-xl font-bold text-[#161932] lg:text-[28px]">
          Settings
        </DialogTitle>
        <div className="mt-8 h-[1px] w-full bg-[#E3E1E1] lg:mt-7" />
        <div className="mt-6 self-center text-[11px] font-bold uppercase tracking-[4.2px] text-[#161932] lg:mt-7">
          Time (Minutes)
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-[#1E213F]/40">pomodoro</div>
            <input
              className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
              value={pomodoroStore.time / 60 / 1000}
              onChange={(e) => {
                pomodoroStore.time = Number(e.target.value) * 60 * 1000
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-[#1E213F]/40">
              short break
            </div>
            <input
              className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
              value={shortBreakStore.time / 60 / 1000}
              onChange={(e) => {
                shortBreakStore.time = Number(e.target.value) * 60 * 1000
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-[#1E213F]/40">
              long break
            </div>
            <input
              className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
              value={longBreakStore.time / 60 / 1000}
              onChange={(e) => {
                longBreakStore.time = Number(e.target.value) * 60 * 1000
              }}
            />
          </div>
        </div>
        <div className="mt-6 h-[1px] w-full bg-[#E3E1E1]" />
        <div className="mt-6 self-center text-[11px] font-bold uppercase tracking-[4.2px] text-[#161932]">
          Font
        </div>
        <RadioGroup
          className="mt-4 flex flex-row items-center justify-center gap-4"
          value={font}
          onValueChange={(font) => setFont(font as Font)}
        >
          <RadioGroupItem
            value={"kumbh-sans"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF1FA] font-kumbh-sans font-bold text-[#1E213F] data-[state=checked]:bg-[#161932] data-[state=checked]:text-white"
          >
            Aa
          </RadioGroupItem>
          <RadioGroupItem
            value={"roboto-slab"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF1FA] font-roboto-slab text-[#1E213F] data-[state=checked]:bg-[#161932] data-[state=checked]:text-white"
          >
            Aa
          </RadioGroupItem>
          <RadioGroupItem
            value={"space-mono"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF1FA] font-space-mono font-bold text-[#1E213F] data-[state=checked]:bg-[#161932] data-[state=checked]:text-white"
          >
            Aa
          </RadioGroupItem>
        </RadioGroup>
        <div className="mt-6 h-[1px] w-full bg-[#E3E1E1]" />
        <div className="mt-6 self-center text-[11px] font-bold uppercase tracking-[4.2px] text-[#161932]">
          Colors
        </div>
        <RadioGroup
          className="mt-4 flex flex-row items-center justify-center gap-4"
          value={color}
          onValueChange={(color) => setColor(color as Color)}
        >
          <RadioGroupItem
            value={"light-red"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#F87070]"
          >
            <RadioGroupIndicator className="hidden data-[state=checked]:block">
              <CheckIcon />
            </RadioGroupIndicator>
          </RadioGroupItem>
          <RadioGroupItem
            value={"cyan"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#70F3F8]"
          >
            <RadioGroupIndicator className="hidden data-[state=checked]:block">
              <CheckIcon />
            </RadioGroupIndicator>
          </RadioGroupItem>
          <RadioGroupItem
            value={"purple"}
            className="bg-grey flex h-10 w-10 items-center justify-center rounded-full bg-[#D881F8]"
          >
            <RadioGroupIndicator className="hidden data-[state=checked]:block">
              <CheckIcon />
            </RadioGroupIndicator>
          </RadioGroupItem>
        </RadioGroup>
        <DialogClose />
      </DialogContent>
    </DialogPortal>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
    >
      <path
        d="M1 5.5L4.95263 9.45263L13.4053 1"
        stroke="#161932"
        stroke-width="2"
      />
    </svg>
  )
}
