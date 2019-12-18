/**
 * @file Task.js
 * @version 1.0.0
 * @author Ernesto Rojas <ernesto20145@gmail.com>
 */

import { Schema, Types } from 'mongoose';
import BasicModel from '../../core/BasicModel';

/**
 * @class Task
 * @classdesc Task class.
 * @author Ernesto Rojas <ernesto20145@gmail.com>
 */
class Task extends BasicModel {
	/**
	 * @method build
	 * @author Ernesto Rojas <ernesto20145@gmail.com>
	 * @description This method build the model.
	 * @returns {mongoose.Model} Mongoose model.
	 */
	protected getSchema(): Schema {
		const opts = {
			timestamps: true,
		};
		return new Schema(
			{
				name: {
					type: String,
					required: true,
				},
				done: {
					type: Boolean,
					default: false,
				},
				project: {
					type: Types.ObjectId,
					ref: 'Project',
					required: true,
				},
			},
			opts,
		);
	}
	/**
	 * @method getById
	 * @author Ernesto Rojas <ernesto20145@gmail.com>
	 * @description This method get model name.
	 * @returns {string} Model name.
	 */
	protected getName() {
		return 'Task';
	}
}

export default Task;
