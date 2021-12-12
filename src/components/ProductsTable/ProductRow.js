import React,{useState} from 'react'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const ProductRow = ({id,code,name,price}) => {
    const [prodPrice,setProdPrice] = useState(price)
    return (
        <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {/* <TableCell component="th" scope="row">
          {row.name}
        </TableCell> */}
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">{code}</TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right"><input onChange={(e) =>{setProdPrice(e.target.value)}} value={prodPrice}/></TableCell>
      </TableRow>
    )
}

export default ProductRow
