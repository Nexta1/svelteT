<script>
  import { Input, InputAddon, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte"
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons"
</script>

<ButtonGroup class="w-full">
  <Button
    color="none"
    class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
  >
    All categories<ChevronDownOutline class="w-6 h-6 ms-2" />
  </Button>
  <Dropdown>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button color="primary" class="!p-2.5" type="submit">
    <SearchOutline class="w-5 h-5" />
  </Button>
</ButtonGroup>
