import { Box } from "@mui/material"
import React from "react"

interface IMenuItem {
    name: string,
    isActive: boolean
}

const MenuItem = (props: IMenuItem) => {

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            flexWrap={'wrap'}
        >
            <Box display={'flex'} justifyContent={'center'}>Teste Menu</Box>
            <Box display={'flex'} justifyContent={'center'}>{props.name} </Box>
            <Box display={'flex'} justifyContent={'center'}><b>{props.isActive.toString()}</b></Box>
        </Box>
    )
}
export default MenuItem