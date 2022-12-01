interface Props {
    color?: string
    size?: number
  }
  
  export default function CheckIcon({ color = "#21ba62", size = 35.708 }: Props) {
    return (
      <svg
        id="Grupo_9411"
        data-name="Grupo 9411"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 35.708 35.708"
      >
        <circle id="Elipse_502" data-name="Elipse 502" cx="17.854" cy="17.854" r="17.854" fill={color} />
        <path
          id="Icon_awesome-check"
          data-name="Icon awesome-check"
          d="M7.982,21.758.344,14.12a1.175,1.175,0,0,1,0-1.662L2.006,10.8a1.175,1.175,0,0,1,1.662,0l5.145,5.145L19.834,4.921a1.175,1.175,0,0,1,1.662,0l1.662,1.662a1.175,1.175,0,0,1,0,1.662L9.644,21.758A1.175,1.175,0,0,1,7.982,21.758Z"
          transform="translate(6.081 5.379)"
          fill="#fff"
        />
      </svg>
    )
  }