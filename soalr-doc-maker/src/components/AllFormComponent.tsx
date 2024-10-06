import { useForm } from 'react-hook-form';

const AllFormComponent = ({ onSubmit }:any) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Name:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("CUSTOMERNAME")} placeholder="Enter CUSTOMERNAME" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>KW:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("KW")} placeholder="Enter KW" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Adress:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("ADDRESS")} placeholder="Enter ADDRESS" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Connection number:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("CONNECTIONNUMBER")} placeholder="Enter CONNECTIONNUMBER" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>np number:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("NPNNUMBER")} placeholder="Enter NPNNUMBER" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Division:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("DIVISION")} placeholder="Enter DIVISION" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Metre Number:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("METERNUMBER")} placeholder="Enter METERNUMBER" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Phone number:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("PHONENUMBER")} placeholder="Enter PHONE NUMBER" />
      </div><div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Pannel by:</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("PANNELMAKE")} placeholder="Enter PANNELMAKE" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Each pannel watts</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("PANELLWATT")} placeholder="Enter PANELLWATT" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Inverter make</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("INVERTERMAKE")} placeholder="Enter INVERTERMAKE" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Client State</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("STATE")} placeholder="Enter STATE" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Client District</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("DISTRICT")} placeholder="Enter DISTRICT" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Total cost</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("TOTALCOST")} placeholder="Enter TOTALCOST" />
      </div>
      <div className='text-center'>
        <label className='block text-sm font-medium text-gray-700'>Installation date</label>
        <input className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" {...register("INSTALLATIONDATE")} placeholder="Enter INSTALLATIONDATE" />
      </div>
      <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="submit">Generate Document</button>
    </form>
  );
};

export default AllFormComponent;
