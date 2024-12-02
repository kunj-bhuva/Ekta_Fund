import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV file (use the correct path)
df = pd.read_csv(r'C:\Users\DANI JAL NILESHBHAI\Desktop\Projects\SE\Performence_Testing\Backend\1000_donors_register.csv')

# Example: Plotting Response Time vs Time
plt.plot(df['timeStamp'], df['elapsed'])
plt.xlabel('Timestamp')
plt.ylabel('Response Time (ms)')
plt.title('Response Time over Time')
plt.xticks(rotation=45)  # Rotate x-axis labels if needed
plt.tight_layout()  # Adjust layout to avoid clipping
plt.show()
