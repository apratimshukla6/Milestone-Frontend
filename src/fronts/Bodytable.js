import React, {useState} from 'react'
import axios from 'axios'
import {CircularProgress, TableBody, TableCell, TableHead, TableRow, Checkbox} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'

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

return (
<div id="scrollableDiv" style={{overflowY: `scroll`, display:`flex`, height: `70vh`, width:`100vw`, overflowX: 'none', borderRadius: '0px'}}>
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
    <TableHead>
        <TableRow>
            <TableCell>
            <Checkbox
              value="checkedA"
              color="primary"
              inputProps={{ 'aria-label': 'Checkbox A' }}
            />
            </TableCell>
            <TableCell>
              Customer Name
            </TableCell>
            <TableCell>
              Customer#
            </TableCell>
            <TableCell>
              Invoice#
            </TableCell>
            <TableCell>
              Invoice Amount
            </TableCell>
            <TableCell>
              Due Date
            </TableCell>
            <TableCell>
              Predicted Payment Date
            </TableCell>
            <TableCell>
              Predicted Aging Bucket
            </TableCell>
            <TableCell>
              Notes
            </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
{responseData.map((response)=>(
  <TableRow>
    <TableCell>
    <Checkbox
      value="checkedA"
      color="primary"
      inputProps={{ 'aria-label': 'Checkbox A' }}
    />
    </TableCell>
    <TableCell>
        {response.name_customer}
    </TableCell>
    <TableCell>
        {response.cust_number}
    </TableCell>
    <TableCell>
        {response.doc_id}
    </TableCell>
    <TableCell>
        {response.total_open_amount}
    </TableCell>
    <TableCell>
        {response.due_in_date}
    </TableCell>
    <TableCell>
        {'--'}
    </TableCell>
    <TableCell>
        {'--'}
    </TableCell>
    <TableCell>
        {response.due_in_date}
    </TableCell>
  </TableRow>
))}


{/*<TableRow>
    <TableCell>
    <Checkbox
      value="checkedA"
      color="primary"
      inputProps={{ 'aria-label': 'Checkbox A' }}
    />
    </TableCell>
    <TableCell>
        test
    </TableCell>
    <TableCell>
        lol
    </TableCell>
    <TableCell>
        123
    </TableCell>
    <TableCell>
        456
    </TableCell>
    <TableCell>
        789
    </TableCell>
    <TableCell>
        {'--'}
    </TableCell>
    <TableCell>
        {'--'}
    </TableCell>
    <TableCell>
        {'--'}
    </TableCell>
</TableRow>*/}



        </TableBody>
        </InfiniteScroll>
    </div>
)
}