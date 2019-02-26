import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	render() {
		return(
		<div>
			<Button className='item-details-button'
							variant='link'
							onClick={() => this.setState({open: !this.state.open})}
			>		
				{this.state.open === false ? `See` : `Hide`} item details
				{this.state.open === false ? ` +` : ` -`}
			</Button>

			<Collapse in={this.state.open}>
				<div>
					<div className='media-well'>
						<Media>
							<Media className='media-img'>
								<img	width={100} 
											height={100} 
											alt='thumbnail' 
											src='https://i5.walmartimages.com/asr/f5a126f3-1ad7-47b5-b10b-d4ca1ef0dc6a_1.47abeca28f502947d1e538cf6ab02e5f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff' 
								/>
							</Media>
							<Media.Body>
								<p style={{fontSize: '15px'}}>
									Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
								</p>
								<Row className='show-grid'>
									<Col md={6}>
										<strong style={{fontSize: '14px'}}>{` $${this.props.price} `}</strong>
										<br />
										<strong className='price-strike'>
											{` $${this.props.price} `}
										</strong>
									</Col>

									<Col md={6}> Qty: 1 </Col>
								</Row>
							</Media.Body>
						</Media>
					</div>
				</div>
			</Collapse>
		</div>
		);
	}
}