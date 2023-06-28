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
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex items-center flex-col min-h-screen sm:py-14 sm:px-8 sm:justify-center bg-[#F9FAFD]">
          <main className="max-w-[730px] sm:rounded-2xl px-4 pt-6 sm:px-8 sm:py-8 pb-4 bg-white">
              <div className="flex items-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-very-dark-blue">
                      Notifications
                  </div>
                  <div
                      className="ml-2 flex h-6 sm:h-8 items-center justify-center rounded-md bg-blue px-3 font-extrabold text-white">
                      3
                  </div>
                  <div className="grow"/>
                  <div className="text-sm sm:text-base font-medium text-dark-grayish-blue">
                      Mark all as read
                  </div>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:gap-2">
                  {notifications.map((it) => (
                      <Card key={it.name} notification={it}/>
                  ))}
              </div>
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
        "flex items-start rounded-lg p-4 sm:px-5",
        notification.isRead ? "bg-white" : "bg-very-light-grayish-blue"
      )}
    >
      <Image
        src={notification.image}
        alt=""
        className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full"
      />
      <div className="text-sm sm:text-base ml-3 grow">{renderContent(notification)}</div>
    </div>
  )
}

function FollowedNotificationContent(props: {
  notification: FollowedNotification
}) {
  return (
    <>
      <div className="font-medium text-dark-grayish-blue">
        <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
          {props.notification.name}
        </Link>
        <span className="ml-1.5">followed you</span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function PostReactedContent(props: { notification: PostReactedNotification }) {
  return (
    <>
      <div className="font-medium text-dark-grayish-blue">
        <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
          {props.notification.name}
        </Link>
        <span className="ml-1.5">reacted to your recent post</span>
        <Link href="#" className="hover:text-blue ml-1.5 font-bold text-dark-grayish-blue">
          {props.notification.post}
        </Link>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function GroupJoinedContent(props: { notification: GroupJoinedNotification }) {
  return (
    <>
      <div className="font-medium text-dark-grayish-blue">
        <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
          {props.notification.name}
        </Link>
        <span className="ml-1.5">has joined your group</span>
        <Link href="#" className="ml-1.5 hover:text-blue font-bold text-dark-grayish-blue">
          {props.notification.group}
        </Link>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="font-medium text-grayish-blue">1m ago</div>
    </>
  )
}

function MessageSentContent(props: { notification: MessageSentNotification }) {
  return (
    <>
      <div className="font-medium text-dark-grayish-blue">
        <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
          {props.notification.name}
        </Link>
        <span className="ml-1.5">sent you a private message</span>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="font-medium text-grayish-blue">1m ago</div>
      <Link href="#" className="block hover:bg-light-grayish-blue-1 text-md mt-3 rounded-[5px] border border-light-grayish-blue-2 bg-white p-4 text-dark-grayish-blue">
        {props.notification.message}
      </Link>
    </>
  )
}

function PictureCommentedContent(props: {
  notification: PictureCommentedNotification
}) {
  return (
    <div className="flex">
      <div className="grow">
        <div className="font-medium text-dark-grayish-blue">
          <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
            {props.notification.name}
          </Link>
          <span className="ml-1.5">commented on your picture</span>
          {!props.notification.isRead && (
            <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
          )}
        </div>
        <div className="font-medium text-grayish-blue">1m ago</div>
      </div>
        <Link href="#"><Image
            src={props.notification.picture}
            className="ml-4 h-10 w-10 sm:h-11 sm:w-11 rounded-lg object-cover"
            alt=""
        /></Link>
    </div>
  )
}

function GroupLeftContent(props: { notification: GroupLeftNotification }) {
  return (
    <>
      <div className="font-medium text-dark-grayish-blue">
        <Link href="#" className="hover:text-blue font-extrabold text-very-dark-blue">
          {props.notification.name}
        </Link>
        <span className="ml-1.5">left the group</span>
        <Link href="#" className="hover:text-blue ml-1.5 font-bold text-dark-grayish-blue">
          {props.notification.group}
        </Link>
        {!props.notification.isRead && (
          <div className="ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-red" />
        )}
      </div>
      <div className="font-medium text-grayish-blue">1m ago</div>
    </>
  )
}
