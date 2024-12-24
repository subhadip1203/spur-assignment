import { supabase } from "@/lib/supabaseClient";

describe("Supabase Connection", () => {
	it("should initialize the Supabase client", () => {
		expect(supabase).toBeDefined();
		expect(supabase).toHaveProperty('from'); // Check if the `from` method exists
		expect(typeof supabase.from).toBe('function');
	});
});
