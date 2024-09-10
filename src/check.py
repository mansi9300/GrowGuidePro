def check_duplicate_lines(file_path):
    try:
        with open(file_path, 'r') as file:
            lines = file.readlines() 

        line_count = {}
        
        for line in lines:
            line = line.strip()  
            if line: 
                line_count[line] = line_count.get(line, 0) + 1

        duplicates = {line: count for line, count in line_count.items() if count > 1}

        if duplicates:
            print("Duplicate lines found:")
            for line, count in duplicates.items():
                print(f"'{line}' occurs {count} times")
        else:
            print("No duplicate lines found.")

    except FileNotFoundError:
        print(f"The file at {file_path} was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

file_path = 'test.txt'  
check_duplicate_lines(r"c:\Users\Excalibur\Documents\GitHub\animalhack\src\test.txt")