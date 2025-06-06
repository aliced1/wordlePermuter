import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme }) => ({
        variants: [
            {
                props: { checked: true },
                style: {
                    '.MuiFormControlLabel-label': {
                        color: theme.palette.primary.main,
                    },
                },
            },
        ],
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

export default function UseRadioGroup({ onChange, value }) {
    return (
        <RadioGroup name="use-radio-group" defaultValue="yellow" onChange={onChange} value={value}>
            <MyFormControlLabel value="yellow" label="Yellow" control={<Radio />} />
            <MyFormControlLabel value="green" label="Green" control={<Radio />} />
        </RadioGroup>
    );
}
