import { motion } from "framer-motion"

export default function PortfolioCard({ title, category, image }) {
  return (
    <motion.div
      className="group relative w-full overflow-hidden rounded-2xl cursor-pointer"
      initial="initial"
      whileHover="hover"
      style={{
        background: "#000",
        height: "380px", // Altura reducida
      }}
    >
      {/* Imagen con Zoom suave */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          initial: { scale: 1, opacity: 0.85 },
          hover: { scale: 1.08 },
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Overlay Oscuro */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        variants={{
          initial: { opacity: 0.8 },
          hover: { opacity: 0.92 },
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Glow sutil rojo al hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(192,57,43,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Borde sutil */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
          transition: "box-shadow 0.5s ease",
        }}
        variants={{
          initial: { boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)" },
          hover: { boxShadow: "inset 0 0 0 1px rgba(192,57,43,0.25)" },
        }}
      />

      {/* Contenido de Texto */}
      <div 
        className="absolute bottom-0 left-0 w-full p-6 md:p-7 flex flex-col"
        style={{
          transform: "translateY(4px)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        
        {/* Badge de Categoría */}
        <motion.span
          className="inline-block self-start px-2.5 py-1 mb-3 text-[9px] font-bold tracking-widest uppercase rounded-full border"
          variants={{
            initial: { opacity: 0, y: 8 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
          style={{
            color: "#c0392b",
            borderColor: "rgba(192,57,43,0.4)",
            background: "rgba(5,5,8,0.6)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {category}
        </motion.span>

        {/* Título Grande - Reducido */}
        <h3
          className="text-2xl md:text-3xl font-bold leading-tight"
          style={{
            fontFamily: "'Bebas Neue', 'Anton', impact, sans-serif",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "0.02em",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}
        >
          {title}
        </h3>
        
        {/* Botón "Ver Proyecto" */}
        <motion.div
          className="h-0 overflow-hidden"
          variants={{
            initial: { height: 0, opacity: 0 },
            hover: { height: "auto", opacity: 1 },
          }}
          transition={{ duration: 0.35, delay: 0.1 }}
          style={{ marginTop: "12px" }}
        >
          <span 
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
            style={{
              color: "rgba(255,255,255,0.6)",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: "6px",
              width: "fit-content",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Ver Detalle
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </motion.div>
  )
}