import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Name", "Family", "Age", "Interests", "Birthday"];

function Table(props: any) {
  const TABLE_ROWS = props;
  return (
    <Card className="overflow-y-auto my-16 w-full max-h-96">
      <table className="w-full table-auto ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th className="border-b border-blue-gray-100 bg-blue-gray-200 p-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-center"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.data?.map(({ age, birth_date, interests, name }: any) => {
            return (
              <tr className="even:bg-blue-gray-50">
                <td className={"p-4"}>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-center"
                  >
                    {name.split(" ")[0]}
                  </Typography>
                </td>
                <td className={"p-4"}>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-center"
                  >
                    {name.split(" ")[1]}
                  </Typography>
                </td>
                <td className={"p-4"}>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-center"
                  >
                    {age}
                  </Typography>
                </td>
                <td className={"p-4"}>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-center"
                  >
                    {interests.map((element: any, index: number) => {
                      return index !== interests.length - 1
                        ? element + ", "
                        : element;
                    })}
                  </Typography>
                </td>
                <td className={"p-4"}>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-center"
                  >
                    {birth_date}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
export default Table;
