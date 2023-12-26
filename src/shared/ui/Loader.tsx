import type { SVGProps } from "react"

export function Loader(props: SVGProps<SVGSVGElement>) {
  console.log("Loader")
  return (
    <div className={"absolute top-0 left-0 w-full h-full flex items-center z-50 bg-loader justify-center"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        height={200}
        preserveAspectRatio="xMidYMid"
        style={{
          margin: "auto",
          background: "transparent",
          display: "block",
          shapeRendering: "auto",
        }}
        viewBox="0 0 100 100"
        {...props}
      >
        <path fill="#e15b64" d="M10 50a40 40 0 0 0 80 0 40 42 0 0 1-80 0">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 51;360 50 51"
          />
        </path>
      </svg>
    </div>
  )
}
