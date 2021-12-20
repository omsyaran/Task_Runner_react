import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header class='header'>
           <h1>{ title }</h1> 
          <Button 
            color='blueviolet' 
            text='Dummys'
            onClick={onClick}/> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//const headingStyle = {color:'blueviolet'}
export default Header
