import { Button, Spinner } from "flowbite-react"

const Loader = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" light />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  )
}

export default Loader