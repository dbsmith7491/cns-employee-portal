import { AppBar, Toolbar } from "@mui/material";

import companyLogo from "../assets/cns_logo.svg";

const CustomAppBar = ({}) => {
  /*
  const [searchParam, setSearchParam] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchParam.length > 0 && searchFocused) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  });*/

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
          color: "inherit",
          zIndex: (theme) => {
            return theme.zIndex.drawer + 1;
          },
        }}
        elevation={0}
      >
        <Toolbar>
          <img src={companyLogo} alt="CNS Portal Logo" height="50px" />
          {/*
          <ClickAwayListener onClickAway={handleClickAway}>
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                placeholder="Search for Customer or Contact..."
                inputProps={{ "aria-label": "search for customer" }}
              />
              {showResults ? (
                <SearchResultsPopdown
                  customerList={customerList}
                  searchParam={searchParam}
                  selectedCustomer={selectedCustomer}
                  setSelectedCustomer={setSelectedCustomer}
                />
              ) : (
                ""
              )}
              
          </ClickAwayListener></Search>*/}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
