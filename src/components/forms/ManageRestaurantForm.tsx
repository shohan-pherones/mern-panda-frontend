"use client";

import { cuisineList } from "@/config";
import {
  RestaurantFormDataType,
  restaurantFormSchema,
} from "@/validations/restaurantFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import AddMenuSection from "./AddMenuSection";

type Props = {
  onSave: (restaurantFormData: RestaurantFormDataType) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormDataType>({
    resolver: zodResolver(restaurantFormSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (data: RestaurantFormDataType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container mx-auto space-y-10 mt-20"
      >
        {/* DETAILS SECTION */}
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">Details</h2>
            <FormDescription>Write down abour your restaurant</FormDescription>
          </div>
          <FormField
            control={form.control}
            name="restaurantName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Price (BDT)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="10.99" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estimatedDeliveryTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>EST. Delivery Time (Minutes)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* CUISINES SECTION */}
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">Cuisines</h2>
            <FormDescription>
              Select the cuisines that your restaurant serves
            </FormDescription>
          </div>
          <FormField
            control={form.control}
            name="cuisines"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {cuisineList.map((item) => (
                    <FormItem key={item} className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, item]);
                            } else {
                              field.onChange(
                                field.value.filter(
                                  (val: string) => val !== item
                                )
                              );
                            }
                          }}
                        />
                      </FormControl>
                      <FormLabel>{item}</FormLabel>
                    </FormItem>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* MENU SECTION */}
        <AddMenuSection />

        {/* IMAGE SECTION */}
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold">Image</h2>
            <FormDescription>
              Add an image that will be displayed on your restaurant listing
            </FormDescription>
          </div>

          <div className="flex flex-col gap-8 w-1/2">
            <FormField
              control={form.control}
              name="imageFile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(event) =>
                        field.onChange(
                          event.target.files ? event.target.files[0] : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="bg-orange-500" size="lg" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 size={18} className="animate-spin" /> Submitting
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
