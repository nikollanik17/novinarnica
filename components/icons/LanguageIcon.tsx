import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function LanguageIcon(props) {
  return (
    <Svg width={30} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#8E384D">
        <Path d="M16.064 13.247c-.062-.207-.318-.304-.58-.304-.255 0-.51.097-.573.304l-1.332 4.343c-.007.027-.014.055-.014.069 0 .22.324.372.566.372.152 0 .27-.048.304-.179l.262-.918h1.58l.264.918c.034.131.151.18.303.18.242 0 .566-.16.566-.373 0-.021-.007-.042-.014-.07l-1.332-4.342zm-1.18 2.982l.6-2.119.6 2.12h-1.2z" />
        <Path d="M19.63 8.975h-6.605V6.154l2.146-1.533a.644.644 0 000-1.05L13 2.022A2.374 2.374 0 0010.655 0H2.37A2.373 2.373 0 000 2.37v8.285a2.373 2.373 0 002.37 2.37h6.605v2.821L6.829 17.38a.645.645 0 000 1.05L9 19.978A2.374 2.374 0 0011.345 22h8.285A2.373 2.373 0 0022 19.63v-8.285a2.373 2.373 0 00-2.37-2.37zM2.37 11.736a1.083 1.083 0 01-1.08-1.081V2.37c0-.596.484-1.08 1.08-1.08h8.285c.596 0 1.081.484 1.081 1.08 0 .209.1.404.27.525l1.682 1.201-1.682 1.202a.645.645 0 00-.27.524v3.153h-.39a2.373 2.373 0 00-2.371 2.37v.391H2.37zm18.34 7.893c0 .597-.484 1.082-1.08 1.082h-8.285a1.083 1.083 0 01-1.081-1.081c0-.209-.1-.404-.27-.525l-1.682-1.201 1.682-1.202a.645.645 0 00.27-.524v-4.833c0-.596.485-1.081 1.081-1.081h8.285c.596 0 1.08.485 1.08 1.081v8.284z" />
        <Path d="M8.493 5.942a.364.364 0 000-.728H6.876v-.882a.364.364 0 00-.727 0v.882H4.532a.364.364 0 000 .728h.501c.08.767.411 1.46.91 1.998-.414.247-.896.39-1.41.39a.363.363 0 000 .727c.735 0 1.417-.23 1.98-.621a3.458 3.458 0 001.98.62.364.364 0 000-.726c-.515 0-.997-.142-1.41-.39a3.467 3.467 0 00.909-1.998h.5zm-1.98 1.544a2.745 2.745 0 01-.747-1.544h1.493a2.744 2.744 0 01-.747 1.544z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LanguageIcon;