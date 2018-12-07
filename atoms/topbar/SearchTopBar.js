import React from 'react'

const SearchTopBar = ({ placeholder = 'Search...', onSearch }) => {
    return (
        <div className="navbar-header hide-below-medium">
            <a className="" onClick={this.toggleNavigation} href="#">
                <img src='/static/images/icons/mag-glass.svg' />
            </a>
            <form role="search" className="navbar-form-custom" method="post" action="#">
                <div className="form-group">
                    <input onChange={onSearch} type="text" placeholder={placeholder} className="form-control" name="top-search" id="top-search" />
                </div>
            </form>
        </div>
    )
}


export default SearchTopBar