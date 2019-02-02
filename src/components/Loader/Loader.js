import React from 'react'
import PropTypes from 'prop-types'
import './Loader.css'

const Loader = ({ isLoading, children }) =>
  isLoading ? (
    <div className="loader">
      <i className="fa fa-1x fa-rebel fa-spin" />
    </div>
  ) : (
    children
  )

Loader.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
}

export default Loader
