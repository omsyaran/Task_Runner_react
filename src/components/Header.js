import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header class='header'>
           <h1>{ title }</h1> 
           <Button 
            color= {showAdd ? 'red' : "blueviolet"}
            text= {showAdd ? 'Close' : 'Add'}
            onClick={onAdd}/> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Runner',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//const headingStyle = {color:'blueviolet'}
export default Header
