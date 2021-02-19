import React, { useState } from "react"
import { Navbar, Form, FormControl, InputGroup } from "react-bootstrap"
import { withRouter } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { setKeyword, loadSearchResult } from "../store/search"

const NavBar = (props) => {
  const [searchedKeyword, setSearchedKeyword] = useState("")

  const dispatch = useDispatch()
  // const { keyword } = useSelector((state) => state.search);

  const searchStringHandler = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      // WHEN ENTER KEY IS PRESSED
      e.preventDefault()
      dispatch(setKeyword(searchedKeyword))
      dispatch(loadSearchResult(searchedKeyword))
    } else {
      setSearchedKeyword(e.target.value)
    }
  }

  const { pathname } = props.location
  return (
    <>
      {!pathname.includes("album") && !pathname.includes("artist") && (
        <Navbar
          className="navbar mt-2 nav-page d-flex justify-content-between"
          variant="light"
        >
          <Form inline>
            <InputGroup className="icons">
              <FormControl
                className="mr-sm-2 searchBar"
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={searchStringHandler}
                onChange={searchStringHandler}
                value={searchedKeyword}
              />
            </InputGroup>
            {/* <FormControl
								type='text'
								placeholder='Search'
								aria-label='search'
								aria-describedby='basic-addon1'
								className='mr-sm-2 searchBar'
								value={this.state.searchString}
								onChange={this.searchStringHandler}
							/> */}
            {/* <Button variant='outline-primary'>Search</Button> */}
          </Form>
          {/* <Nav className='mr-auto text-white'>
							<Nav.Link href='#'>Home</Nav.Link>
							<Nav.Link href='#'>Features</Nav.Link>
							<Nav.Link href='#'>Pricing</Nav.Link>
						</Nav> */}
        </Navbar>
      )}
    </>
  )
}

export default withRouter(NavBar)
