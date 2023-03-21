import React from "react"
import { FunctionComponent } from "react"

type Props = {
    note?: string
}

// export default function Note(props: Props) {
//     return (
//         <div>SOMENOTE</div>
//     )
// }

const Note: FunctionComponent<Props> = () => (
    <div>
        function component
    </div>
)

export default Note