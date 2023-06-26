import avatarAngelaGray from "#/avatar-angela-gray.webp"
import avatarAnnaKim from "#/avatar-anna-kim.webp"
import avatarJacobThompson from "#/avatar-jacob-thompson.webp"
import avatarKimberlySmith from "#/avatar-kimberly-smith.webp"
import avatarMarkWebber from "#/avatar-mark-webber.webp"
import avatarNathanPeterson from "#/avatar-nathan-peterson.webp"
import avatarRizkyHasanuddin from "#/avatar-rizky-hasanuddin.webp"
import imageChess from "#/image-chess.webp"
import { StaticImageData } from "next/image"

export type PostReactedNotification = {
  type: "post-reacted"
  image: StaticImageData
  name: string
  post: string
  isRead: boolean
}
export type FollowedNotification = {
  type: "followed"
  image: StaticImageData
  name: string
  isRead: boolean
}
export type GroupJoinedNotification = {
  type: "group-joined"
  image: StaticImageData
  name: string
  group: string
  isRead: boolean
}
export type MessageSentNotification = {
  type: "message-sent"
  image: StaticImageData
  name: string
  message: string
  isRead: boolean
}
export type PictureCommentedNotification = {
  type: "picture-commented"
  name: string
  image: StaticImageData
  picture: StaticImageData
  isRead: boolean
}
export type GroupLeftNotification = {
  type: "group-left"
  image: StaticImageData
  name: string
  group: string
  isRead: boolean
}
export type Notification =
  | PostReactedNotification
  | FollowedNotification
  | GroupJoinedNotification
  | MessageSentNotification
  | PictureCommentedNotification
  | GroupLeftNotification

export const notifications: Notification[] = [
  {
    type: "post-reacted",
    image: avatarMarkWebber,
    name: "Mark Webber",
    post: "My first tournament today!",
    isRead: false,
  },
  {
    type: "followed",
    image: avatarAngelaGray,
    name: "Angela Gray",
    isRead: false,
  },
  {
    type: "group-joined",
    image: avatarJacobThompson,
    name: "Jacob Thompson",
    group: "Chess Club",
    isRead: false,
  },
  {
    type: "message-sent",
    image: avatarRizkyHasanuddin,
    name: "Rizky Hasanuddin",
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    isRead: true,
  },
  {
    type: "picture-commented",
    image: avatarKimberlySmith,
    name: "Kimberly Smith",
    picture: imageChess,
    isRead: true,
  },
  {
    type: "post-reacted",
    image: avatarNathanPeterson,
    name: "Nathan Peterson",
    post: "5 end-game strategies to increase your win rate",
    isRead: true,
  },
  {
    type: "group-left",
    image: avatarAnnaKim,
    name: "Anna Kim",
    group: "Chess Club",
    isRead: true,
  },
]
