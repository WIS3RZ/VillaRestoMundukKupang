export default function AvCheck() {
  return (
    <>
      <div className="mx-auto max-w-full bg-avocado-2">
        <div className="container mx-auto">
          <form>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 p-2 gap-3">
                <div className="py-2">
                    <label htmlFor="checkInDate">
                    Check-In Date
                    <div className="m-1"></div>
                    <input type="date" className="rounded-lg p-2 w-full md:w-[80%]" name="checkInDate" id="checkInDate"/>
                    </label>
                    
                </div>
                <div className="py-2">
                    <label htmlFor="checkOutDate">Check-Out Date
                    <div className="m-1"></div>
                    <input type="date" className="rounded-lg p-2 w-full md:w-[80%]" name="checkOutDate" id="checkOutDate"/>
                    </label>
                    
                </div>
                <div className="flex items-center self-center">
                    <button type="submit" className="bg-avocado-3 py-2 px-3 w-full rounded-xl">Submit</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
