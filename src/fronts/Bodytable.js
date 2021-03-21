import React, {useState} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import {CircularProgress, TableBody, TableCell, TableHead, TableRow, Checkbox} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';

const StyledTableCell = withStyles((theme) => ({
  root: {
    width: '97vw',
    borderBottomColor: '#283A46'
  },
  head: {
    color: '#5C6C77',
    fontSize: 12
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
    fontWeight: 100,
    borderBottom: "none"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#283A46',
    }
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function App() 
{
  let [isNext, isNextFunc] = React.useState(false)
  let [pageCount, setCount] = React.useState(1)
  const url = `http://localhost:8080/Summer_Internship_Backend/Fetch`
  const [responseData, setResponseData] = useState([])
  const loadMoreData = () => {
    setCount(pageCount + 1);
};
console.log(pageCount);
React.useEffect( () => {
axios
.get(url)
.then((response) => {
    setResponseData([...responseData, ...response.data]);
    isNextFunc(true)
})
.catch((error) => {
    console.log(error)
})
},[pageCount]);
console.log("After axios " ,pageCount);


const classes = useStyles();
return (
<div id="scrollableDiv" style={{overflowY: `auto`, display:`flex`, height: `70vh`, width:`100vw`, overflowX: 'none', borderRadius: '0px', color: '#fffff'}}>
<InfiniteScroll
        dataLength={responseData.length}
        next={loadMoreData}
        hasMore={isNext}
        loader={
            <div
            style={{height: '80%', paddingLeft: '35%', overflow: 'hidden'}}
            >
            <CircularProgress />
            </div>
        }
        scrollableTarget="scrollableDiv"
        >
    <Table>
    <TableHead>
        <TableRow>
            <StyledTableCell>
            <Checkbox
              value="checkedA"
              color="primary"
              inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            </StyledTableCell>
            <StyledTableCell>
              Customer Name
            </StyledTableCell>
            <StyledTableCell>
              Customer #
            </StyledTableCell>
            <StyledTableCell>
              Invoice #
            </StyledTableCell>
            <StyledTableCell>
              Invoice Amount
            </StyledTableCell>
            <StyledTableCell>
              Due Date
            </StyledTableCell>
            <StyledTableCell>
              Predicted Payment Date
            </StyledTableCell>
            <StyledTableCell>
              Predicted Aging Bucket
            </StyledTableCell>
            <StyledTableCell>
              Notes
            </StyledTableCell>
        </TableRow>
    </TableHead>
    <TableBody stripedRows>
{responseData.map((response)=>(
  <StyledTableRow>
    <StyledTableCell>
    <Checkbox
      value="checkedA"
      color="primary"
      inputProps={{ 'aria-label': 'Checkbox A' }}
    />
    </StyledTableCell>
    <StyledTableCell>
        {response.name_customer}
    </StyledTableCell>
    <StyledTableCell>
        {response.cust_number}
    </StyledTableCell>
    <StyledTableCell>
        {response.doc_id}
    </StyledTableCell>
    <StyledTableCell>
        {response.total_open_amount}
    </StyledTableCell>
    <StyledTableCell>
        {response.due_in_date}
    </StyledTableCell>
    <StyledTableCell>
        {'--'}
    </StyledTableCell>
    <StyledTableCell>
        {'--'}
    </StyledTableCell>
    <StyledTableCell>
        {response.due_in_date}
    </StyledTableCell>
  </StyledTableRow>
))}


        {/*<StyledTableRow>
            <StyledTableCell>
            <Checkbox
              value="checkedA"
              color="primary"
              inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            </StyledTableCell>
            <StyledTableCell>
                test
            </StyledTableCell>
            <StyledTableCell>
                lol
            </StyledTableCell>
            <StyledTableCell>
                123
            </StyledTableCell>
            <StyledTableCell>
                456
            </StyledTableCell>
            <StyledTableCell>
                789
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
            <StyledTableCell>
            <Checkbox
              value="checkedA"
              color="primary"
              inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            </StyledTableCell>
            <StyledTableCell>
                test
            </StyledTableCell>
            <StyledTableCell>
                lol
            </StyledTableCell>
            <StyledTableCell>
                123
            </StyledTableCell>
            <StyledTableCell>
                456
            </StyledTableCell>
            <StyledTableCell>
                789
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
            <StyledTableCell>
                {'--'}
            </StyledTableCell>
        </StyledTableRow>*/}



        </TableBody>
        </Table>
        </InfiniteScroll>
    </div>
)
}