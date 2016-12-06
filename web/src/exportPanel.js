function init(React){

	var ExportPanel = React.createClass({
		dealSave:function(){
			var self = this,
				userInput = React.findDOMNode(self.refs.pathInput).value;

			self.props.onExportCollection && self.props.onExportCollection.call(null,userInput);
		},		
		render:function(){
			var self = this;

			return (
				<div>
					<h4 className="subTitle">Export Postman collection</h4>
						<div className="exportSection">
						<div className="uk-form">
							<input className="uk-form-large" ref="pathInput" defaultValue={self.props.defaultValue} type="text" width="300"/>
						</div></div>
				    <div className="exportSection-btn">
		            	        <button type="button" className="uk-button" onClick={self.dealSave}>Save</button>
	                        </div>
				</div>
			);
		}
	});

	return ExportPanel;
}

module.exports.init = init;