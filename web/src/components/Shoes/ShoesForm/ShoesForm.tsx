import type { EditShoesById, UpdateShoesInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormShoes = NonNullable<EditShoesById['shoes']>

interface ShoesFormProps {
  shoes?: EditShoesById['shoes']
  onSave: (data: UpdateShoesInput, id?: FormShoes['id']) => void
  error: RWGqlError
  loading: boolean
}

const ShoesForm = (props: ShoesFormProps) => {
  const onSubmit = (data: FormShoes) => {
    props.onSave(data, props?.shoes?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormShoes> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.shoes?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShoesForm
