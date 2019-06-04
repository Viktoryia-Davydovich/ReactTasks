import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';

import wrapCounterBtnStyles from './styles'

const WrapCounter = ({add_counter, delete_counter, reset_counters}) => (
    <div>
        <Button style={wrapCounterBtnStyles.btnStyle} onClick={add_counter}>
            new counter
        </Button>
        <Button style={wrapCounterBtnStyles.btnStyle} onClick={delete_counter}>
            delete counter
        </Button>
        <Button style={wrapCounterBtnStyles.delBtnStyle} onClick={reset_counters}>
            reset counters
        </Button>
    </div>
)

WrapCounter.propTypes = {
    add_counter: PropTypes.func.isRequired,
    delete_counter: PropTypes.func.isRequired,
    reset_counters: PropTypes.func.isRequired,
}

export default WrapCounter;
