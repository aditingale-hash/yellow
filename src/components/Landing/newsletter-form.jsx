import React from 'react'
import classnames from 'clsx'
// import './assets/styles.css'
export function NewsletterForm({ className, onSubmit, submitBtn }) {
  const [text, setText] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(text)
  }

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={classnames('newsletter-form is-revealing md:flex', className)}>
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Text
        </label>
        <input
          required
          placeholder="input "
          id="text"
          name="text"
          type="text"
          value={text}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitBtn || 'Submit'}
        </button>
      </div>
    </form>
  )
}
