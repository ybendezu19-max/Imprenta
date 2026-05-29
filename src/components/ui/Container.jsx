export default function Container({
  children,
  className = "",
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(20px, 5vw, 112px)",
        paddingRight: "clamp(20px, 5vw, 112px)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
 