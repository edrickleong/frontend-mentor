import {
  FollowedNotification,
  GroupJoinedNotification,
  GroupLeftNotification,
  MessageSentNotification,
  Notification,
  notifications,
  PictureCommentedNotification,
  PostReactedNotification,
} from "@/app/notifications"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <header className="mx-4 mt-6 flex items-center">
        <div className="text-xl font-extrabold text-very-dark-blue">
          Notifications
        </div>
        <div className="ml-2 flex h-6 items-center justify-center rounded-md bg-blue px-3 font-extrabold text-white">
          3
        </div>
        <div className="grow" />
        <div className="text-sm font-medium text-dark-grayish-blue">
          Mark all as read
        </div>
      </header>
      <main className="mx-4 mb-4 mt-6 flex flex-col gap-2.5">
        {notifications.map((it) => (
          <Card key={it.name} notification={it} />
        ))}
      </main>
    </div>
  )
}

function Card({ notification }: { notification: Notification }) {
  const renderContent = (notification: Notification) => {
    switch (notification.type) {
      case "followed":
        return <FollowedNotificationContent notification={notification} />
      case "post-reacted":
        return <PostReactedContent notification={notification} />
      case "group-joined":
        return <GroupJoinedContent notification={notification} />
      case "message-sent":
        return <MessageSentContent notification={notification} />
      case "picture-commented":
        return <PictureCommentedContent notification={notification} />
      case "group-left":
        return <GroupLeftContent notification={notification} />
    }
  }

  return (
    <div
      className={cn(
        "flex items-start rounded-lg p-4",
        notification.isRead ? "bg-white" : "bg-very-light-grayish-blue"
      )}
    >
      <Image
        src={notification.image}
        alt=""
        className="h-10 w-10 shrink-0 rounded-full"
      />
      <div className="ml-3 grow">{renderContent(notification)}</div>
    </div>
  )
}

function FollowedNotificationContent(props: {
  notification: FollowedNotification
}) {
  return (
    <>
      <div className="text-sm font-medium text-dark-grayish-blue">
        <span className="font-extrabold text-very-dark-blue">
          {props.notification.name}
        </span>
        <span className="ml-1.5">followed you</span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="text-sm font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function PostReactedContent(props: { notification: PostReactedNotification }) {
  return (
    <>
      <div className="text-sm font-medium text-dark-grayish-blue">
        <span className="font-extrabold text-very-dark-blue">
          {props.notification.name}
        </span>
        <span className="ml-1.5">reacted to your recent post</span>
        <span className="ml-1.5 font-bold text-dark-grayish-blue">
          {props.notification.post}
        </span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="text-sm font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function GroupJoinedContent(props: { notification: GroupJoinedNotification }) {
  return (
    <>
      <div className="text-sm font-medium text-dark-grayish-blue">
        <span className="font-extrabold text-very-dark-blue">
          {props.notification.name}
        </span>
        <span className="ml-1.5">has joined your group</span>
        <span className="ml-1.5 font-bold text-dark-grayish-blue">
          {props.notification.group}
        </span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="text-sm font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function MessageSentContent(props: { notification: MessageSentNotification }) {
  return (
    <>
      <div className="text-sm font-medium text-dark-grayish-blue">
        <span className="font-extrabold text-very-dark-blue">
          {props.notification.name}
        </span>
        <span className="ml-1.5">sent you a private message</span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="text-sm font-medium text-grayish-blue">1m ago</div>
      <div className="text-md mt-3 rounded-[5px] border border-light-grayish-blue-2 bg-white p-4 text-sm text-dark-grayish-blue">
        {props.notification.message}
      </div>
    </>
  )
}

function PictureCommentedContent(props: {
  notification: PictureCommentedNotification
}) {
  return (
    <div className="flex">
      <div className="grow">
        <div className="text-sm font-medium text-dark-grayish-blue">
          <span className="font-extrabold text-very-dark-blue">
            {props.notification.name}
          </span>
          <span className="ml-1.5">commented on your picture</span>
          {!props.notification.isRead && (
            <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
          )}
        </div>
        <div className="text-sm font-medium text-grayish-blue">1m ago</div>
      </div>
      <Image
        src={props.notification.picture}
        className="ml-4 h-10 w-10 rounded-lg object-cover"
        alt=""
      />
    </div>
  )
}

function GroupLeftContent(props: { notification: GroupLeftNotification }) {
  return (
    <>
      <div className="text-sm font-medium text-dark-grayish-blue">
        <span className="font-extrabold text-very-dark-blue">
          {props.notification.name}
        </span>
        <span className="ml-1.5">left the group</span>
        <span className="ml-1.5 font-bold text-dark-grayish-blue">
          {props.notification.group}
        </span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="text-sm font-medium text-grayish-blue">1m ago</div>
    </>
  )
}
