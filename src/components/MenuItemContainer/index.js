import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const MenuItemContainer = ({ children }) => {
	return <div className='menu-item-container'>{children}</div>
}

MenuItemContainer.propTypes = {
	children: PropTypes.node,
}

export default MenuItemContainer
