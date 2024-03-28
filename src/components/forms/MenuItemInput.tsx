import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props {
  index: number;
  removeMenuItem: () => void;
}

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex items-end gap-5">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Name
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="Cheese Burger" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Price (USD)
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="10.99" />
            </FormControl>
          </FormItem>
        )}
      />

      <Button
        type="button"
        onClick={removeMenuItem}
        className="max-h-fit"
        variant="destructive"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
