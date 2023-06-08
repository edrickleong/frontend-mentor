import iconArcade from "#/icon-arcade.svg"
import iconAdvanced from "#/icon-advanced.svg"
import iconPro from "#/icon-pro.svg"

export const plans = [
  {
    id: "arcade",
    name: "Arcade",
    price: {
      month: 9,
      year: 90,
    },
    icon: iconArcade,
  },
  {
    id: "advanced",
    name: "Advanced",
    price: {
      month: 12,
      year: 120,
    },
    icon: iconAdvanced,
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      month: 15,
      year: 150,
    },
    icon: iconPro,
  },
] as const

function getPlan(id: string) {
  return plans.find((plan) => plan.id === id)
}

export function getPlanName(id: string) {
  const plan = getPlan(id)
  return plan?.name
}

export function getPlanPrice(id: string, period: "month" | "year") {
  const plan = getPlan(id)
  return plan?.price[period]
}

export const addons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: {
      month: 1,
      year: 10,
    },
    id: "onlineService",
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      month: 2,
      year: 20,
    },
    id: "largerStorage",
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      month: 2,
      year: 20,
    },
    id: "customizableProfile",
  },
] as const

function getAddon(id: string) {
  return addons.find((plan) => plan.id === id)
}

export function getAddonName(id: string) {
  const addon = getAddon(id)
  return addon?.name
}

export function getAddonPrice(id: string, period: "month" | "year") {
  const addon = getAddon(id)
  return addon?.price[period]
}
