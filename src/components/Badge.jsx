import { getContrastColor } from '../utils/contrast'

export default function Badge({ 
  children, 
  color = '#2d6a4f',
  className = '',
  ...props 
}) {
  const textColor = getContrastColor(color)
  
  return (
    <span
      className={`badge ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
        ...props.style
      }}
      {...props}
    >
      {children}
    </span>
  )
}
