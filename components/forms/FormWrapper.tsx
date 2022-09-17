const FormWrapper = ({ callBack, children }: any) => {
  return (
    <form
      className="lg:p-6 lg:bg-white lg:shadow lg:rounded-md"
      onSubmit={callBack}
    >
      {children}
    </form>
  )
}

export default FormWrapper
