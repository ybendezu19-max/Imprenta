import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51999999999"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-400
        text-white
        p-4
        rounded-full
        shadow-2xl
        z-50
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <MessageCircle size={28} />
    </a>
  )
}