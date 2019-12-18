/**
 * @file Project.js
 * @version 1.0.0
 * @author Ernesto Rojas <ernesto20145@gmail.com>
 */

import { Schema } from 'mongoose';
import BasicModel from '../../core/BasicModel';

/**
 * @class Project
 * @classdesc Project class.
 * @author Ernesto Rojas <ernesto20145@gmail.com>
 */
class Project extends BasicModel {
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
        priority: {
          type: Number,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        deliveryDate: {
          type: Date,
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
    return 'Project';
  }
}

export default Project;
