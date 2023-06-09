import { Input, SubmitButton } from "@/components/ui";
import { revalidatePath } from "next/cache";

const todos: string[] = [];

export default function HomePage() {
  // implementation
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;

    todos.push(todo);
    revalidatePath("/");
  }

  return (
    <div className="flex justify-center min-h-screen items-center w-full">
      <main className="max-w-5xl w-full">
        {todos.length ? (
          todos.map((item, index) => (
            <div key={index + 1}>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <p>Belum ada Data!</p>
        )}
        <div>
          <form action={addTodo}>
            <Input name="todo" />
            <SubmitButton />
          </form>
        </div>
      </main>
    </div>
  );
}
