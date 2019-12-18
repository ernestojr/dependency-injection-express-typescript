import { Schema, model, Model, Document } from 'mongoose';

import Base from './Base';

abstract class ModelBase extends Base {
  protected abstract getName(): string;
  protected abstract getSchema(): Schema;
  public build(): Model<Document> {
    return model(this.getName(), this.getSchema());
  }
}

export default ModelBase;
