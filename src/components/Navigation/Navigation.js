import React, { Component } from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTempType } from '../../actions/tempTypeActions';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	changeTempType = (e) => {
		const { setTempType } = this.props;
		setTempType(e.target.value);
	};
	render() {
		const { tempType } = this.props.tempType;
		return (
			<div className="navigation">
				<nav className="navbar">
					<p>
						<Link to="/">Weather Forecast App</Link>
					</p>
					<div className="rightNav">
						<p>
							English (US)
							<select
								onChange={this.changeTempType}
								value={tempType}
							>
								<option value="C">&deg;C</option>
								<option value="F">&deg;F</option>
								<option value="K">K</option>
							</select>
						</p>
					</div>
				</nav>
			</div>
		);
	}
}

Navigation.propTypes = {
	tempType: PropTypes.object.isRequired,
	setTempType: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	setTempType: (data) => dispatch(setTempType(data))
});

const mapStateToProps = (state) => ({
	tempType: state.tempType
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation);
